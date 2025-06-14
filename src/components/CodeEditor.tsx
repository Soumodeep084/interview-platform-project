"use client";
import {
  QUESTION_GROUPS,
  LANGUAGES,
  CodeQuestion,
} from "@/constants/questions";
import { useState, useEffect } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./ui/resizable";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { AlertCircleIcon, BookIcon, LightbulbIcon } from "lucide-react";
import Editor from "@monaco-editor/react";
import { Badge } from "./ui/badge";

function CodeEditor() {
  // 1. State initialization with persistence
  const [codingQuestions, setCodingQuestions] = useState<CodeQuestion[]>([]);
  const [selectedQuestion, setSelectedQuestion] = useState<CodeQuestion | null>(
    null
  );
  const [language, setLanguage] = useState<"javascript" | "python" | "java">(
    LANGUAGES[0]?.id || "javascript"
  );
  const [code, setCode] = useState("");

  // 2. Load/save questions on mount
  useEffect(() => {
    const randomIndex = 0;
    const newQuestions = QUESTION_GROUPS[randomIndex] || QUESTION_GROUPS[0];
    sessionStorage.setItem("currentQuestionSet", JSON.stringify(newQuestions));
    setCodingQuestions(newQuestions);
    setSelectedQuestion(newQuestions[0]);
    setCode(newQuestions[0].starterCode[language]);

    // const savedQuestions = sessionStorage.getItem("currentQuestionSet");
    // if (savedQuestions) {
    //   const parsed = JSON.parse(savedQuestions);
    //   setCodingQuestions(parsed);
    //   setSelectedQuestion(parsed[0]);
    //   setCode(parsed[0].starterCode[language]);
    // } else {
    //   // const randomIndex = Math.floor(Math.random() * QUESTION_GROUPS.length);
    //   const randomIndex = 0;
    //   const newQuestions = QUESTION_GROUPS[randomIndex] || QUESTION_GROUPS[0];
    //   sessionStorage.setItem(
    //     "currentQuestionSet",
    //     JSON.stringify(newQuestions)
    //   );
    //   setCodingQuestions(newQuestions);
    //   setSelectedQuestion(newQuestions[0]);
    //   setCode(newQuestions[0].starterCode[language]);
    // }
  }, [language]);

  // 3. KEEP ALL YOUR EXISTING HANDLERS (NO CHANGES NEEDED)
  const handleQuestionChange = (questionId: string) => {
    const question = codingQuestions.find((q) => q.id === questionId);
    if (question) {
      setSelectedQuestion(question);
      setCode(question.starterCode[language]);
    }
  };

  const handleLanguageChange = (
    newLanguage: "javascript" | "python" | "java"
  ) => {
    setLanguage(newLanguage);
  };

  // 4. Loading state
  if (!selectedQuestion) return <div>Loading...</div>;

  return (
    <ResizablePanelGroup
      direction="vertical"
      className="min-h-[calc-100vh-4rem-1px]"
    >
      {/* QUESTION SECTION */}
      <ResizablePanel>
        <ScrollArea className="h-full">
          <div className="p-6">
            <div className="max-w-4xl mx-auto space-y-6">
              {/* HEADER */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="lg:flex lg:items-center lg:gap-2">
                    <h2 className="text-xl font-semibold tracking-tight">
                      <span className="mr-3">{selectedQuestion.title}</span>
                      {selectedQuestion.difficulty === "easy" ? (
                        <Badge className="bg-green-100 text-green-800">
                          Easy
                        </Badge>
                      ) : selectedQuestion.difficulty === "medium" ? (
                        <Badge className="bg-yellow-100 text-yellow-800">
                          Medium
                        </Badge>
                      ) : (
                        <Badge className="bg-red-100 text-red-800">Hard</Badge>
                      )}
                    </h2>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Choose your language first then select the problem and solve
                    it.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Select
                    value={selectedQuestion.id}
                    onValueChange={handleQuestionChange}
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select question" />
                    </SelectTrigger>
                    <SelectContent>
                      {codingQuestions.map((q) => (
                        <SelectItem key={q.id} value={q.id}>
                          {q.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Select value={language} onValueChange={handleLanguageChange}>
                    <SelectTrigger className="w-[150px]">
                      <SelectValue>
                        <div className="flex items-center gap-2">
                          <img
                            src={`/${language}.png`}
                            alt={`${language} logo`} // 4. Better alt text
                            className="w-5 h-5 object-contain"
                          />
                          {LANGUAGES.find((l) => l.id === language)?.name ||
                            language}
                        </div>
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      {LANGUAGES.map((lang) => (
                        <SelectItem key={lang.id} value={lang.id}>
                          <div className="flex items-center gap-2">
                            <img
                              src={`/${lang.id}.png`}
                              alt={`${lang.name} logo`} // 4. Better alt text
                              className="w-5 h-5 object-contain"
                            />
                            {lang.name}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* PROBLEM DESC. */}
              <Card>
                <CardHeader className="flex flex-row items-center gap-2">
                  <BookIcon className="h-4 w-4 text-primary/80" />
                  <CardTitle>Problem Description</CardTitle>
                </CardHeader>
                <CardContent className="text-sm leading-relaxed">
                  <div className="dark:text-muted-foreground text-black max-w-none">
                    <p className="whitespace-pre-line">
                      {selectedQuestion.description}
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* PROBLEM EXAMPLES */}
              <Card>
                <CardHeader className="flex flex-row items-center gap-2">
                  <LightbulbIcon className="h-5 w-5 text-yellow-500" />
                  <CardTitle>Examples</CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-full w-full rounded-md border">
                    <div className="p-4 space-y-4">
                      {selectedQuestion.examples.map((example, index) => (
                        <div key={index} className="space-y-2">
                          <p className="font-medium text-sm">
                            Example {index + 1}:
                          </p>
                          <ScrollArea className="h-full w-full rounded-md">
                            <pre className="bg-muted/50 p-3 rounded-lg text-sm font-mono">
                              <div>Input: {example.input}</div>
                              <div>Output: {example.output}</div>
                              {example.explanation && (
                                <div className="pt-2 text-muted-foreground">
                                  Explanation: {example.explanation}
                                </div>
                              )}
                            </pre>
                            <ScrollBar orientation="horizontal" />
                          </ScrollArea>
                        </div>
                      ))}
                    </div>
                    <ScrollBar />
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* CONSTRAINTS */}
              {selectedQuestion.constraints && (
                <Card>
                  <CardHeader className="flex flex-row items-center gap-2">
                    <AlertCircleIcon className="h-5 w-5 text-blue-500" />
                    <CardTitle>Constraints</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-1.5 text-sm marker:text-muted-foreground">
                      {selectedQuestion.constraints.map((constraint, index) => (
                        <li
                          key={index}
                          className="text-black dark:text-muted-foreground"
                        >
                          {constraint}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
          <ScrollBar />
        </ScrollArea>
      </ResizablePanel>

      <ResizableHandle withHandle />

      {/* CODE EDITOR */}
      <ResizablePanel defaultSize={60} maxSize={100}>
        <div className="h-full relative">
          <Editor
            height="100%"
            language={language}
            theme="vs-dark"
            value={code}
            onChange={(value) => setCode(value || "")}
            options={{
              autoIndent: "full", // Enable auto-indentation
              tabSize: 2, // Set tab size (2 or 4 spaces)
              insertSpaces: true, // Use spaces instead of tabs
              detectIndentation: true, // Detect indentation from content
              minimap: { enabled: false },
              fontSize: 14,
              lineNumbers: "on",
              scrollBeyondLastLine: false,
              automaticLayout: true,
              padding: { top: 16, bottom: 16 },
              wordWrap: "on",
              wrappingIndent: "indent",
            }}
          />
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}

export default CodeEditor;

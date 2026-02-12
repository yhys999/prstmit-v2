import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ROUTE_PATHS } from "@/lib/index";
import { Layout } from "@/components/Layout";
import Home from "@/pages/Home";

// 初始化 React Query 客户端
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 分钟缓存
      retry: 1,
    },
  },
});

/**
 * 应用根组件
 * 负责全局状态提供者、路由配置以及基础布局嵌套
 */
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          <Routes>
            {/* 
              主页路由：使用 Layout 包裹 Home 页面
              ROUTE_PATHS.HOME 定义在 src/lib/index.ts 中
            */}
            <Route
              path={ROUTE_PATHS.HOME}
              element={
                <Layout>
                  <Home />
                </Layout>
              }
            />

            {/* 
              如果未来有更多页面，可以在此继续添加路由
              遵循 Minimal Implementation 原则，目前仅配置首页
            */}
          </Routes>
        </BrowserRouter>

        {/* 全局通知组件 */}
        <Toaster />
        <Sonner position="top-right" expand={false} richColors />
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

import { Button } from '@mcp-marketplace/ui';

export function App() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background gradient and effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/5"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      {/* Animated background elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>

      {/* Main content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center p-8">
        <div className="mx-auto max-w-4xl text-center space-y-8">
          {/* Logo/Brand section */}
          <div className="space-y-4">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl shadow-2xl mb-6">
              <div className="text-2xl font-bold text-primary-foreground">
                MCP
              </div>
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-foreground animate-fade-in">
              mcp.directory
            </h1>
          </div>

          {/* Coming soon message */}
          <div className="space-y-6 animate-slide-up">
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              The ultimate marketplace for Model Context Protocol servers.
              Discover mcp servers over the internet.
            </p>
          </div>

          {/* CTA section */}
          <div className="space-y-6 pt-8">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="px-8 py-3 text-lg bg-primary hover:bg-primary/90 transition-all duration-300"
              >
                Notify Me When Ready
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-3 text-lg border-border/50 hover:border-primary/50 hover:bg-primary/5"
              >
                Learn More
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              Be the first to know when we launch. Join the future of AI
              tooling.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
        <p className="text-xs text-muted-foreground">
          Built with
          <span role="img" aria-label="heart">
            {' '}
            ❤️{' '}
          </span>
          for the AI community
        </p>
      </div>
    </div>
  );
}

export default App;

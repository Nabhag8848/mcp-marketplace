export function MarketplaceUi() {
  return (
    <div className="min-h-screen bg-secondary-50 flex items-center justify-center">
      <div className="max-w-md mx-auto bg-white rounded-4xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-red-500 mb-4 animate-fade-in">
          Welcome to MarketplaceUI!
        </h1>
        <p className="text-secondary-600 mb-6 animate-slide-up">
          This component is using shared Tailwind CSS configuration with custom
          colors, fonts, and animations.
        </p>
        <div className="space-y-4">
          <button className="w-full bg-primary-500 hover:bg-primary-600 text-white font-medium py-3 px-6 rounded-lg transition-colors">
            Primary Button
          </button>
          <button className="w-full bg-secondary-200 hover:bg-secondary-300 text-secondary-800 font-medium py-3 px-6 rounded-lg transition-colors">
            Secondary Button
          </button>
        </div>
        <div className="mt-6 p-4 bg-primary-50 rounded-lg border border-primary-200">
          <p className="text-sm text-primary-700">
            Using custom spacing: <span className="font-mono">spacing-18</span>{' '}
            = 4.5rem
          </p>
        </div>
      </div>
    </div>
  );
}

export default MarketplaceUi;

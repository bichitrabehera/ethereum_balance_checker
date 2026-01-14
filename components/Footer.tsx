export default function Footer({ refresh }: { refresh: () => void }) {
  return (
    <footer className="mt-16 bg-white border-t">
      {/* Top utility row */}
      <div
        className="max-w-7xl mx-auto px-6 py-4
                      flex items-center justify-between
                      text-sm text-gray-500"
      >
        <span>
          © {new Date().getFullYear()}{" "}
          <span className="font-medium text-gray-700">ChainView</span>
        </span>

        <button
          onClick={refresh}
          className="text-blue-600 hover:text-blue-700
                     font-medium transition"
        >
          Refresh network
        </button>
      </div>

      {/* Brand section */}
      <div className="border-t bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-12 text-center">
          <h2 className="text-5xl md:text-6xl font-semibold tracking-tight text-gray-900">
            ChainView
          </h2>
          <p className="mt-3 text-sm text-gray-500">
            Ethereum Sepolia Network Dashboard
          </p>
        </div>
      </div>
    </footer>
  );
}

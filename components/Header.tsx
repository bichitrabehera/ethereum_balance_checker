import { Wallet } from "lucide-react";

type HeaderProps = {
  acc: string;
  connectWallet: () => void;
};

export default function Header({ acc, connectWallet }: HeaderProps) {
  return (
    <header className=" border-b border-[#ffffff20]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-100">ChainView</h1>
          {/* <p className="text-xs text-gray-500">Ethereum · Sepolia Network</p> */}
        </div>

        {!acc ? (
          <button
            onClick={connectWallet}
            className="inline-flex items-center gap-2 px-4 py-2
                       bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium
                       transition"
          >
            <Wallet className="w-4 h-4" />
            Connect
          </button>
        ) : (
          <div className="flex items-center gap-3 px-4 py-2 bg-green-500">
            <span className="font-mono text-sm text-black font-semibold">
              Connected
            </span>
          </div>
        )}
      </div>
    </header>
  );
}

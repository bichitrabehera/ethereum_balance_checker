import { NextResponse } from "next/server";
import web3 from "@/utils/web3";

export async function GET() {
  try {
    const start = Date.now();

    const [chainId, latestBlock] = await Promise.all([
      web3.eth.getChainId(),
      web3.eth.getBlockNumber(),
    ]);

    const latency = Date.now() - start;

    return NextResponse.json({
      chain: "Sepolia",
      chainId: Number(chainId),
      latestBlock: Number(latestBlock),
      latency: `${latency}ms`,
      status: "connected",
    });
  } catch (error) {
    console.error("Network API error:", error);

    return NextResponse.json(
      {
        chain: "Sepolia",
        status: "disconnected",
      },
      { status: 503 }
    );
  }
}

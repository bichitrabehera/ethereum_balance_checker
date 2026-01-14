// import { error } from "console";
import { NextResponse, NextRequest } from "next/server";
import web3 from "@/utils/web3";

export async function POST(req: NextRequest) {
  try {
    const { address } = await req.json();
    if (!address) {
      return NextResponse.json(
        { error: "address is required" },
        { status: 400 }
      );
    }
    const isAddress = web3.utils.isAddress(address);

    if (isAddress) {
      return NextResponse.json({ message: "Correct Address" });
    } else {
      return NextResponse.json({ message: "Invalid address" });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Failed to fetch balance" },
      { status: 500 }
    );
  }
}

import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, message } = body;

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        // Insert into Supabase
        const { error } = await supabase
            .from('messages')
            .insert([
                { name, email, message, created_at: new Date().toISOString() },
            ]);

        if (error) {
            console.error("Supabase Error:", error);
            return NextResponse.json(
                { error: "Failed to save message" },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { success: true, message: "Message sent successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Internal Error:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}

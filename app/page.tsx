"use client"
import WebHome from "@/components/home";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase-config";

export default function Home() {
  const [user, loading] = useAuthState(auth);

  const router = useRouter();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (user) {
    return <WebHome />;
  } else {
    router.replace("/login");
  }
}

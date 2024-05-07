"use client";
import WebSignup from "@/components/form";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/navigation";
import { auth } from "../../../firebase-config";

type Props = {};

const Login = (props: Props) => {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  if (loading) {
    console.log("Loading...");
    return <div>Loading...</div>
  } else {
    if (!user) {
      return (
       <WebSignup />
      );
    } else {
      router.replace("/");
      return <div>Loading...</div>
    }
  }
};

export default Login;

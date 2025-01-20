"use client";

import React from "react";
import { Button } from "../ui/button";
import { useFormStatus } from "react-dom";

type Props = {
  text: string;
};

const SubmitBtn = ({ text }: Props) => {
  const { pending } = useFormStatus();
  return (
    <Button
      className='mb-4 bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]'
      type='submit'
      disabled={pending}>
      {!pending ? text : "Processing"} &rarr;
    </Button>
  );
};

export default SubmitBtn;

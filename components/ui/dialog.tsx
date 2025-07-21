"use client"
import * as React from "react"
import * as RadixDialog from "@radix-ui/react-dialog"

export function Dialog({ children, ...props }: RadixDialog.DialogProps) {
  return <RadixDialog.Root {...props}>{children}</RadixDialog.Root>
}

export function DialogTrigger({ children, ...props }: RadixDialog.DialogTriggerProps) {
  return <RadixDialog.Trigger {...props}>{children}</RadixDialog.Trigger>
}

export function DialogContent({ children, ...props }: RadixDialog.DialogContentProps) {
  return (
    <RadixDialog.Portal>
      <RadixDialog.Overlay className="fixed inset-0 bg-black/40 z-50" />
      <RadixDialog.Content
        {...props}
        className={
          "fixed z-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-xl p-6 focus:outline-none " +
          (props.className || "")
        }
      >
        {children}
        <RadixDialog.Close className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-xl">×</RadixDialog.Close>
      </RadixDialog.Content>
    </RadixDialog.Portal>
  )
} 
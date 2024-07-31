'use client'
import React from 'react'
import { TbFileInvoice } from "react-icons/tb";
import { useRouter } from 'next/navigation';
import { useSession, signIn } from "next-auth/react"

const AddToQuote = ({ id }) => {
    const router = useRouter()
    const { status } = useSession()

    const AddToCart = async (productID) => {
        if (status === 'authenticated') {
          try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/cart`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: GetAuthorization(),
              },
              body: JSON.stringify({
                product_id: productID,
                quantity: 1,
                color: "",
                size: "",
                day: 3,
                service_id: "",
                type: "quote",
              }),
            });
            if (!response.ok) {
              alert("something went wrong");
              return;
            } else {
              toast.success("Product Added Successfully");
            }
          } catch (e) {
            console.log("something went wrong");
            return null;
          }
        } else {
          alert("please login!!");
          router.push("/login");
        }
      };


  return (
     <div
        className="flex items-center justify-center w-[50%] cursor-pointer"
        onClick={() => AddToCart(id)}
      >
        <div className="flex items-center justify-center text-sm">
          <TbFileInvoice />
          Cart
        </div>
      </div>
  )
}

export default AddToQuote

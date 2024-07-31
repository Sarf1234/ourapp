'use client'
import React from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useRouter } from 'next/navigation';
import { useSession, signIn } from "next-auth/react"

const AddToCard = ({ id }) => {
    const router = useRouter()
    const { data: session, status } = useSession()


    const AddToCart = async (productID) => {
        if (status === 'authenticated') {
          try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/cart`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `'Bearer ${session?.user?.token}'`,
              },
              body: JSON.stringify({
                product_id: productID,
                quantity: 1,
                color: "",
                size: "",
                day: 3,
                service_id: "",
                type: "cart",
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
          <AiOutlineShoppingCart />
          Cart
        </div>
      </div>
  )
}

export default AddToCard

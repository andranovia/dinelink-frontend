import { OrderTable } from "@/components/orderHistory/OrderTable";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

const page = () => {
  return (
    <div className="p-3">
      <Card className="col-span-1 lg:col-span-3 ">
        <CardHeader className="flex justify-between flex-row items-center w-full">
          <div className="flex flex-col gap-2">
            <CardTitle>Recent Transactions</CardTitle>
            <CardDescription>
              The transactions you have made by far.
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="flex justify-center items-center w-full">
          <OrderTable
            data={[
              {
                id: "1a2b3c",
                restaurantProfilePhoto:
                  "https://example.com/photos/restaurant1.jpg",
                restaurantName: "Warung Sederhana",
                amount: { price: 150000, currency: "IDR" },
                paymentMethod: "GoPay",
                products: ["Nasi Goreng", "Es Teh Manis"],
                date: "2025-01-29",
                status: "Success",
              },
              {
                id: "4d5e6f",
                restaurantProfilePhoto:
                  "https://example.com/photos/restaurant2.jpg",
                restaurantName: "Bakso Mas Joko",
                amount: { price: 80000, currency: "IDR" },
                paymentMethod: "DANA",
                products: ["Bakso Urat", "Es Jeruk"],
                date: "2025-01-28",
                status: "Pending",
              },
              {
                id: "7g8h9i",
                restaurantProfilePhoto:
                  "https://example.com/photos/restaurant3.jpg",
                restaurantName: "Sate Pak Budi",
                amount: { price: 40000, currency: "IDR" },
                paymentMethod: "Cash",
                products: ["Sate Ayam", "Lontong", "Sambal Kacang"],
                date: "2025-01-27",
                status: "Incomplete",
              },
              {
                id: "0j1k2l",
                restaurantProfilePhoto:
                  "https://example.com/photos/restaurant4.jpg",
                restaurantName: "Mie Ayam Bang Udin",
                amount: { price: 45000, currency: "IDR" },
                paymentMethod: "OVO",
                products: ["Mie Ayam", "Pangsit Goreng"],
                date: "2025-01-26",
                status: "Failed",
              },
              {
                id: "3m4n5o",
                restaurantProfilePhoto:
                  "https://example.com/photos/restaurant5.jpg",
                restaurantName: "Kopi Kenangan",
                amount: { price: 60000, currency: "IDR" },
                paymentMethod: "Credit Card",
                products: ["Kopi Susu", "Roti Bakar"],
                date: "2025-01-25",
                status: "Success",
              },
            ]}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default page;

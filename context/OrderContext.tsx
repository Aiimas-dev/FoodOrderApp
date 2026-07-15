import { createContext, useContext, useState } from "react";

type Order = {
  id: string;
  name: string;
  qty: number;
  total: number;
  status: string;
};

type OrderContextType = {
  orders: Order[];

  addOrder: (order: Order) => void;

  finishOrder: (id: string) => void;
};

const OrderContext = createContext<OrderContextType | null>(null);

export function OrderProvider({ children }: { children: React.ReactNode }) {
  const [orders, setOrders] = useState<Order[]>([]);

  const addOrder = (order: Order) => {
    setOrders((prev) => [...prev, order]);
  };

  const finishOrder = (id: string) => {
    setOrders((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              status: "Pesanan Selesai",
            }
          : item,
      ),
    );
  };

  return (
    <OrderContext.Provider
      value={{
        orders,
        addOrder,
        finishOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}

export function useOrders() {
  const context = useContext(OrderContext);

  if (!context) {
    throw new Error("useOrders harus berada di dalam OrderProvider");
  }

  return context;
}

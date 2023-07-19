import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import Modal from "@/components/Modal";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { createSeerbitSubscription } from "../utils/createSubscription";

interface PaymentModalProps {
  isOpen: boolean;
  onChanges: (open: boolean) => void;
}

interface PaymentFormData {
  cardNumber: string;
  cardName: string;
  expiryYear: string;
  expiryMonth: string;
  cvv: string;
  email: string;
  mobileNumber: string;
}
const currentDate = new Date();
const timestamp = currentDate.getTime();

// Create a unique reference by appending a prefix or any other desired format
interface PaymentDefaults {
  publicKey: string | undefined;
  paymentReference: string;
  amount: string;
  currency: string;
  planId: string;
  customerId: string;
  billingPeriod: string;
  billingCycle: string;
  redirectUrl: string;
  startDate: string;
  subscriptionAmount: boolean;
  productDescription: string;
  productId: string;
  country: string;
}

const paymentDefaults: PaymentDefaults = {
  publicKey: process.env.NEXT_PUBLIC_SEERBIT_API_KEY,
  paymentReference: `REF-${timestamp}`,
  amount: "100",
  currency: "NGN",
  customerId: "34",
  billingPeriod: "4",
  planId: "spotify2.0",
  billingCycle: "MONTHLY",
  redirectUrl: "/",
  startDate: "2019-01-11 00:00:00",
  subscriptionAmount: true,
  productDescription: "Subscription to Spotify 2.0",
  productId: "spotify2.0",
  country: "NG",
};
const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onChanges }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit } = useForm<PaymentFormData>();
  const onSubmit: SubmitHandler<PaymentFormData> = async (data) => {
    try {
      setIsLoading(true);
      // console.log({ ...data, ...paymentDefaults });

      const res: any = await createSeerbitSubscription({
        ...data,
        ...paymentDefaults,
      });
      // if (res.response.status !== 200) {
      //   toast.error("Payment failed");
      // } else {
      //   toast.success("Payment submitted successfully");
      // }
      onChanges(false);
    } catch (error) {
      console.error(error);
      toast.error("Payment failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal
      title="Create Subscription"
      description="Fill in the payment details"
      isOpen={isOpen}
      onChange={onChanges}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-4">
        <Input
          id="cardName"
          required
          disabled={isLoading}
          {...register("cardName", { required: true })}
          placeholder="Card Holder Name"
        />
        <Input
          id="cardNumber"
          disabled={isLoading}
          type="number"
          required
          maxLength={2}
          {...register("cardNumber", { required: true })}
          placeholder="Card Number"
        />
        <Input
          id="expiryYear"
          required
          type="number"
          maxLength={2}
          disabled={isLoading}
          {...register("expiryYear", { required: true })}
          placeholder="Expiry Year"
        />
        <Input
          id="expiryMonth"
          required
          type="number"
          disabled={isLoading}
          {...register("expiryMonth", { required: true })}
          placeholder="Expiry Month"
        />
        <Input
          id="cvv"
          required
          type="number"
          disabled={isLoading}
          {...register("cvv", { required: true })}
          placeholder="CVV"
        />

        <Input
          required
          id="email"
          disabled={isLoading}
          {...register("email", { required: true })}
          placeholder="Email"
        />

        <Input
          id="mobileNumber"
          disabled={isLoading}
          required
          type="tel"
          {...register("mobileNumber", { required: true })}
          placeholder="Mobile Number"
        />

        <Button disabled={isLoading} type="submit">
          Create Subscription
        </Button>
      </form>
    </Modal>
  );
};

export default PaymentModal;

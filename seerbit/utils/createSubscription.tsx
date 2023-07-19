import axios from "axios";
import { toast } from "react-hot-toast";

interface CreateSubscriptionParams {
  publicKey: string | undefined;
  paymentReference: string;
  planId: string;
  cardNumber: string;
  expiryYear: string;
  expiryMonth: string;
  cvv: string;
  amount: string;
  email: string;
  country: string;
  productDescription: string;
  billingCycle: string;
  subscriptionAmount: boolean;
  mobileNumber: string;
  customerId: string;
  billingPeriod: string;
  redirectUrl: string;
}

export async function createSeerbitSubscription(
  params: CreateSubscriptionParams
) {
  try {
    const url = "https://seerbitapi.com/api/v2/recurring/subscribes";
    // const token = "SBPUBK_DQ24K6T5TI1WOAOYPWWYMGMHKDRVEGPW"; // Replace with your actual token

    const { data } = await axios.post(url, params, {
      headers: {
        // Authorization: token,
      },
    });

    if (data) {
      toast.success("Payment submitted successfully");
    }
    console.log("Subscription created:", data);

    // Add your desired logic here upon successful subscription creation
  } catch (error) {
    toast.error("Payment failed");

    console.error("Failed to create subscription:", error);
    // Add your error handling logic here
  }
}

import React from "react";
import { ToastType } from "../defitions/ToatsType";
import { contactDataType } from "../types/types";
import { supabase } from "../utils/supabaseClient";

class MessageService{
    async sendMessage  (formData: contactDataType, toastData: ToastType, setToatsData: React.Dispatch<React.SetStateAction<ToastType>>, toggleShowToast: () => void) {
        try {
          const { data: data, error: error } = await supabase
            .from("Zmessages")
            .insert([
              {
                firstName: formData?.firstName,
                lastName: formData?.lastName,
                email: formData?.email,
                message: formData?.message,
                state: formData?.state
              },
            ]);
        console.log(data)
          if (error) {
            setToatsData({
              ...toastData,
              title: "Echec",
              message: "Une erreur s'est produite, réessayer d'envoyer votre message",
              icon: "ri-close-line",
              type: "danger",
              delay: 3000
            })
            toggleShowToast();
          }else{
            setToatsData({
              ...toastData,
              title: "Succès",
              message: "Message envoyé",
              icon: "ri-check-line",
              type: "success",
              delay: 3000
            })
            toggleShowToast();
          }
        } catch (error: any) {
          setToatsData({
            ...toastData,
            title: "Echec",
            message: "Une erreur est survenue, réessayezUne erreur s'est produite, réessayer d'envoyer votre message",
            icon: "ri-close-line",
            type: "danger"
          })
          toggleShowToast();
          
          console.log(error);
          throw error;
        }
      };
}

export default new MessageService


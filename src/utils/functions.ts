import { SetStateAction } from "react"
import { supabase } from "./supabaseClient"
import { userType } from "../defitions/defitions"


export const _counter = (data: number, setData: React.Dispatch<SetStateAction<number>>) => {
    setData(data + 1)
  }


  //////////////////////////
  // user function
  ////////////////////////////

export const _getUsers = async (setIsLoading: any, setUsers: any) => {
  let { data: user, error } = await supabase
    .from("users")
    .select("id, first_name, last_name, role, email")
    .eq("status", true)
    // .order("created_at", { ascending: true });

  setIsLoading(true);
  console.log(user);
  if (user) {
    setUsers(user);
    setIsLoading(false);
  }
  if (error) {
    console.log(error);
  }
};


export const _addUser = async (formData: any, users: [userType], setUsers: React.Dispatch<SetStateAction<userType[]>>, handleClose: () => void) => {
  const { data, error } = await supabase
    .from("users")
    .insert([
      {
        first_name: formData?.firstName,
        last_name: formData?.lastName,
        email: formData?.email,
        password: formData?.password,
        role: formData?.role,
        status: true,
      },[]
    ])
    .select();

    if (data) {
      setUsers([
        ...users,
        {
          first_name: formData?.firstName,
          last_name: formData?.lastName,
          email: formData?.email,
          password: formData?.password,
          role: formData?.role,
        },
      ]);
      handleClose();
    }
  if (error) {
    console.log(error);
  }
}

export const _editUser = async (formData: any, users: [userType], setUsers: React.Dispatch<SetStateAction<userType[]>>, handleCloseEdit: () => void ) => {
  const { data, error } = await supabase
    .from("users")
    .update({
      first_name: formData?.first_name,
      last_name: formData?.last_name,
      email: formData?.email,
      role: formData?.role,
    })
    .eq("id", formData?.id)
    .select();

  const newData = users?.map((user: any) => {
    if (user.id === formData.id) {
      return {
        ...user,
        first_name: formData?.first_name,
        last_name: formData?.last_name,
        email: formData?.email,
        role: formData?.role,
      };
    }
    return user;
  });
  handleCloseEdit();

  setUsers(newData);

  if (data) {

    // _getUsers(setIsLoading, setUsers);
    // setTimeout(() => {
      handleCloseEdit();
    // }, 2000);
  }
  if(error){
    console.log(error)
  }
};

export  const _deleteUser = async (id: string, users: [userType], setIsLoading: React.Dispatch<SetStateAction<boolean>>, setUsers: React.Dispatch<SetStateAction<userType[]>>, handleCloseDelete: () => void) => {
  setIsLoading(true)
  const { data, error } = await supabase
    .from("users")
    .update({ status: false })
    .eq("id", id)
    .select();

  if (data) {
    const newData = users.filter((user: userType) => user.id !== id)
      setUsers(newData)
      handleCloseDelete();
  setIsLoading(false)
  
}
if(error){
  console.log(error)
  setIsLoading(false)
  }

}
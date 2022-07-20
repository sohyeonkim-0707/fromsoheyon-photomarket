// 깃 오류 확인

import {
  FieldValues,
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface IShopWriteProps {
  //   data?: any;
  isEdit: boolean;
}

export interface IShopWriteUIProps {
  onClickUploadProduct: (data: any) => Promise<void>;
  onClcikEditProduct: () => void;

  register: UseFormRegister<FieldValues>;
  formState: FormState<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  isActive: boolean;
  isEdit: boolean;
}

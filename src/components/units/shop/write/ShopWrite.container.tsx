import ShopWriteUI from "./ShopWrite.presenter";
import { IShopWriteProps } from "./ShopWrite.types";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./ShopWrite.validation";
import { CREATE_USED_ITEM } from "./ShopWrite.queris";

export default function ShopWrite(props: IShopWriteProps) {
  const router = useRouter();

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
  });

  const [createUseditem] = useMutation(CREATE_USED_ITEM);

  // π μν λ±λ‘νκΈ°
  const onClickUploadProduct = async (data: any) => {
    console.log("π λ€μ΄μ€λ", data);
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: data.price,
          },
        },
      });
      console.log("π± λ±λ‘", data);
      alert("μνμ λ±λ‘ν©λλ€.");
      router.push(`/shop/${result.data.createUseditem._id}`);
    } catch (error) {
      // if (error instanceof Error)
      console.log(error.message);
    }
  };

  // π μνμμ νκΈ°
  const onClcikEditProduct = () => {};

  return (
    <ShopWriteUI
      onClickUploadProduct={onClickUploadProduct}
      onClcikEditProduct={onClcikEditProduct}
      // form
      register={register}
      formState={formState}
      handleSubmit={handleSubmit}
      isActive={formState.isValid}
      // μ»΄ν¬λνΈ μ¬μ¬μ©
      isEdit={props.isEdit}
    />
  );
}

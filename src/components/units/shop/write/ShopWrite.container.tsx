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

  // 📌 상품 등록하기
  const onClickUploadProduct = async (data: any) => {
    console.log("📌 들어오냐", data);
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
      console.log("🌱 등록", data);
      alert("상품을 등록합니다.");
      router.push(`/shop/${result.data.createUseditem._id}`);
    } catch (error) {
      // if (error instanceof Error)
      console.log(error.message);
    }
  };

  // 📌 상품수정하기
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
      // 컴포넌트 재사용
      isEdit={props.isEdit}
    />
  );
}

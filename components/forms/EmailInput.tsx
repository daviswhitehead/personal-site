import React from "react";
import { Input, Button, Text, FormControl } from "native-base";
import { space } from "styling/spacing";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type AwaitingSubscriptionProps = {
  onSubmit: () => void;
  onTextChange: (text: string) => void;
  email: string;
};

const EmailInput = ({
  onSubmit,
  onTextChange,
  email,
}: AwaitingSubscriptionProps) => {
  // email validation
  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Please enter a valid email address")
      .required("Your email is required")
      .default(""),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    // @ts-expect-error can't figure out this TS2345 error
    resolver: yupResolver(schema),
  });

  const onSubmitHandler = () => {
    onSubmit();
    reset();
  };

  const handleTextChange = (value: string) => {
    onTextChange(value);
  };

  return (
    <FormControl
      isRequired
      isInvalid={"email" in errors}
      mt="3"
      p={space.sm}
      borderColor="orange.400"
    >
      <Controller
        name="email"
        control={control}
        render={({ field: { ref, ...field } }) => {
          return (
            <Input
              ref={ref}
              {...field}
              placeholder="Type your email..."
              type="text"
              _hover={{
                borderColor: "orange.300",
              }}
              _focus={{
                borderColor: "orange.300",
                bg: "unstyled",
                borderWidth: "1",
              }}
              focusOutlineColor="orange.300"
              borderColor="orange.300"
              value={email}
              onChangeText={(e) => {
                handleTextChange(e);
              }}
              InputRightElement={
                <Button
                  rounded="none"
                  w="1/6"
                  h="100%"
                  p={0}
                  px={10}
                  bg="orange.300"
                  _hover={{
                    bg: "orange.300",
                  }}
                  _pressed={{
                    bg: "orange.400",
                  }}
                  onPress={handleSubmit(onSubmitHandler)}
                >
                  <Text color={"black"}>Subscribe</Text>
                </Button>
              }
            />
          );
        }}
      />
      <FormControl.ErrorMessage>
        {errors.email?.message}
      </FormControl.ErrorMessage>
    </FormControl>
  );
};

export default EmailInput;

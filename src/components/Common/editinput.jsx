import React from "react";
import { Input, TextArea, Form } from "semantic-ui-react";

export default ({ type, onChange, className, value }) =>
  type !== "textarea" ? (
    <Input
      type={type}
      onChange={onChange}
      className={className}
      value={value}
    />
  ) : (
    <Form>
      <TextArea onChange={onChange} className={className} value={value} />
    </Form>
  );

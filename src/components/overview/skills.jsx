import React from "react";
import { Table } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import { EditState } from "../../redux/actions/editAction";
import EditInput from "../Common/editinput";

export default () => {
  const dispatch = useDispatch();

  const { editState } = useSelector((state) => state.editor);
  return (
    <div className="skill">
      <Table basic="very">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Skills</Table.HeaderCell>
            <Table.HeaderCell>Experience</Table.HeaderCell>
            <Table.HeaderCell>Rating</Table.HeaderCell>

          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>Html</Table.Cell>
            {editState?.edit && editState?.name === "Html" ? (
              <EditInput value="5 years" />
            ) : (
              <Table.Cell onClick={() => dispatch(EditState("Html"))}>
                5 years
              </Table.Cell>
            )}
          </Table.Row>
          <Table.Row>
            <Table.Cell>Css</Table.Cell>
            {editState?.edit && editState?.name === "Css" ? (
              <EditInput value="2 years" />
            ) : (
              <Table.Cell onClick={() => dispatch(EditState("Css"))}>
                2 years
              </Table.Cell>
            )}
          </Table.Row>
          <Table.Row>
            <Table.Cell>Angular</Table.Cell>
            {editState?.edit && editState?.name === "Angular" ? (
              <EditInput value="Fresher" />
            ) : (
              <Table.Cell onClick={() => dispatch(EditState("Angular"))}>
                Fresher
              </Table.Cell>
            )}
          </Table.Row>
          <Table.Row>
            <Table.Cell>React Js</Table.Cell>
            {editState?.edit && editState?.name === "React Js" ? (
              <EditInput value="Fr9 yearsesher" />
            ) : (
              <Table.Cell onClick={() => dispatch(EditState("React Js"))}>
                9 years
              </Table.Cell>
            )}
          </Table.Row>
          <Table.Row>
            <Table.Cell>Node Js</Table.Cell>
            {editState?.edit && editState?.name === "Node Js" ? (
              <EditInput value="Freasher" />
            ) : (
              <Table.Cell onClick={() => dispatch(EditState("Node Js"))}>
                Freasher
              </Table.Cell>
            )}
          </Table.Row>
          <Table.Row>
            <Table.Cell>React Native</Table.Cell>
            {editState?.edit && editState?.name === "React Native" ? (
              <EditInput value="8 years" />
            ) : (
              <Table.Cell onClick={() => dispatch(EditState("React Native"))}>
                8 years
              </Table.Cell>
            )}
          </Table.Row>
          <Table.Row>
            <Table.Cell>Availability</Table.Cell>
            {editState?.edit && editState?.name === "Availability" ? (
              <EditInput value="8 years" />
            ) : (
              <Table.Cell onClick={() => dispatch(EditState("Availability"))}>
                8 years
              </Table.Cell>
            )}
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
};

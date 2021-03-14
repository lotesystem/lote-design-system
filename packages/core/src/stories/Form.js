import React from 'react';
import { Container, Row, CustomInput, Column, Form, FormGroup, FormText, Label, FormFeedback, Input, Button } from '../components';


export default {
    title: 'Form',
    parameters: {
        component: Form,
    }
};


export const simple = () => {

    return (
        <div style={{maxWidth: '960px',padding: '16px', margin: '0 auto', border: '1px solid #ddd'}}>
        <Form>
            <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
            </FormGroup>
            <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
            </FormGroup>
            <FormGroup>
                <Label for="exampleSelect">Select</Label>
                <Input type="select" name="select" id="exampleSelect">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="exampleSelectMulti">Select Multiple</Label>
                <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="exampleText">Text Area</Label>
                <Input type="textarea" name="text" id="exampleText" />
            </FormGroup>
            <FormGroup>
                <Label for="exampleFile">File</Label>
                <Input type="file" name="file" id="exampleFile" />
                <FormText>Hello! This is Help text. A block-level text for the above input.
                    Must be 8-20 characters long.
                </FormText>
            </FormGroup>
            <FormGroup tag="fieldset">
                <legend>Radio Buttons</legend>


                <CustomInput type="radio" id="radio1" name="radio" label="Option one is this and that—be sure to include why it's great"/>{' '}

                <CustomInput type="radio" id="radio2" name="radio" label="Option two can be something else and selecting it will deselect option one"/>{' '}

                <CustomInput type="radio" id="radio3" disabled label="Option three is disabled"/>{' '}

                <FormGroup mb={6}>
                    <CustomInput type="checkbox" id="check" label="Check me out"/>{' '}
                </FormGroup>

                <Button>Submit</Button>


            </FormGroup>
        </Form>
        </div>
    );
};

export const grid = () => {

    return (
        <Container fluid style={{maxWidth: '1440px', paddingTop: '24px', paddingBottom: '24px'}}>
            <Form>
                <FormGroup row>
                    <Label for="exampleEmail" sm={2}>Email</Label>
                    <Column sm={10}>
                        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                    </Column>
                </FormGroup>

                <FormGroup row>
                    <Label for="examplePassword" sm={2}>Password</Label>
                    <Column sm={10}>
                        <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                    </Column>
                </FormGroup>

                <FormGroup row>
                    <Label for="exampleSelect" sm={2}>Select</Label>
                    <Column sm={10}>
                        <Input type="select" name="select" id="exampleSelect">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Input>
                    </Column>
                </FormGroup>

                <FormGroup row>
                    <Label for="exampleSelectMulti" sm={2}>Select Multiple</Label>
                    <Column sm={10}>
                        <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Input>
                    </Column>
                </FormGroup>

                <FormGroup row>
                    <Label for="exampleText" sm={2}>Text Area</Label>
                    <Column sm={10}>
                        <Input type="textarea" name="text" id="exampleText" />
                    </Column>
                </FormGroup>

                <FormGroup row>
                    <Label for="exampleFile" sm={2}>File</Label>
                    <Column sm={10}>
                        <Input type="file" name="file" id="exampleFile" />
                        <FormText>Hello! This is Help text. A block-level text for the above input.
                            Please upload your file here.
                        </FormText>
                    </Column>
                </FormGroup>

                <FormGroup tag="fieldset" row>
                    <Label sm={2}>Radio Buttons</Label>
                    <Column sm={10}>
                        <CustomInput type="radio" id="radio1" name="radio" label="Option one is this and that—be sure to include why it's great"/>{' '}

                        <CustomInput type="radio" id="radio2" name="radio" label="Option two can be something else and selecting it will deselect option one"/>{' '}

                        <CustomInput type="radio" id="radio3" disabled label="Option three is disabled"/>{' '}

                    </Column>
                </FormGroup>


                <FormGroup row>
                    <Label for="checkbox2" sm={2}>Checkbox</Label>
                    <Column sm={10}>
                        <CustomInput type="checkbox" id="check" label="Check me out"/>{' '}
                    </Column>
                </FormGroup>

                <FormGroup row>
                    <Column xs={12}>
                        <Button>Submit</Button>
                    </Column>
                </FormGroup>

            </Form>
        </Container>
    );
};

export const gridWithRow = () => {

    return (
        <Container fluid style={{maxWidth: '1440px', paddingTop: '24px', paddingBottom: '24px'}}>
            <Form>
                <Row form>

                    <Column md={6}>
                        <FormGroup>
                            <Label for="exampleEmail">Email</Label>
                            <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                        </FormGroup>
                    </Column>

                    <Column md={6}>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                        </FormGroup>
                    </Column>
                </Row>

                <FormGroup>
                    <Label for="exampleAddress">Address</Label>
                    <Input type="text" name="address" id="exampleAddress" placeholder="1234 Main St"/>
                </FormGroup>

                <FormGroup>
                    <Label for="exampleAddress2">Address 2</Label>
                    <Input type="text" name="address2" id="exampleAddress2" placeholder="Apartment, studio, or floor"/>
                </FormGroup>

                <Row form>
                    <Column md={6}>
                        <FormGroup>
                            <Label for="exampleCity">City</Label>
                            <Input type="text" name="city" id="exampleCity"/>
                        </FormGroup>
                    </Column>

                    <Column md={4}>
                        <FormGroup>
                            <Label for="exampleState">State</Label>
                            <Input type="text" name="state" id="exampleState"/>
                        </FormGroup>
                    </Column>

                    <Column md={2}>
                        <FormGroup>
                            <Label for="exampleZip">Zip</Label>
                            <Input type="text" name="zip" id="exampleZip"/>
                        </FormGroup>
                    </Column>
                </Row>
                <FormGroup mb={6}>
                    <CustomInput type="checkbox" id="check" label="Check me out"/>{' '}
                </FormGroup>

                <Button>Sign in</Button>
            </Form>
        </Container>
    );
};

export const validation = () => {

    return (
        <div style={{maxWidth: '960px',padding: '16px', margin: '0 auto', border: '1px solid #ddd'}}>
            <Form>
                <FormGroup>
                    <Label for="exampleEmail">Input without validation</Label>
                    <Input />
                    <FormFeedback>This is default validation feedback without valid prop.</FormFeedback>
                </FormGroup>

                <FormGroup>
                    <Label for="exampleEmail">Valid input</Label>
                    <Input valid />
                    <FormFeedback valid>Hello! This is validation feedback with valid prop.</FormFeedback>
                </FormGroup>

                <FormGroup>
                    <Label for="examplePassword">Invalid input</Label>
                    <Input invalid />
                    <FormFeedback invalid>No! This is validation feedback with invalid prop.</FormFeedback>
                </FormGroup>

                <FormGroup>
                    <Label for="select1">Choose City</Label>
                        <Input type="select">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Input>
                </FormGroup>

                <FormGroup>
                    <Label for="select2">Choose City</Label>
                    <Input valid type="select">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Input>
                    <FormFeedback valid>Hello! This is validation feedback with valid prop.</FormFeedback>
                </FormGroup>

                <FormGroup>
                    <Label for="select3">Choose City</Label>
                    <Input invalid type="select">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Input>
                    <FormFeedback invalid>No! This is validation feedback with invalid prop.</FormFeedback>
                </FormGroup>

                <FormGroup>
                    <Label for="exampletextArea1">Description</Label>
                    <Input type="textarea" />
                </FormGroup>

                <FormGroup>
                    <Label for="exampletextArea2">Description</Label>
                    <Input valid type="textarea" />
                    <FormFeedback valid>Hello! This is validation feedback with valid prop.</FormFeedback>
                </FormGroup>

                <FormGroup>
                    <Label for="exampletextArea3">Description</Label>
                    <Input invalid type="textarea" />
                    <FormFeedback invalid>No! This is validation feedback with invalid prop.</FormFeedback>
                </FormGroup>


                <FormGroup mb={8}>
                    <CustomInput type="radio" name="radio" id="radio1" label="Agree to terms and conditions"/>{' '}
                </FormGroup>

                <FormGroup mb={8}>
                    <CustomInput type="radio" name="radio" valid id="radio2" label="Agree to terms and conditions"/>{' '}
                </FormGroup>

                <FormGroup mb={8}>
                    <CustomInput type="radio" name="radio" invalid id="radio3" label="Agree to terms and conditions"/>{' '}
                </FormGroup>


                <FormGroup mb={8}>
                    <CustomInput type="checkbox" id="check" label="Check me out"/>{' '}
                </FormGroup>

                <FormGroup mb={8}>
                    <CustomInput type="checkbox" valid id="check2" label="Check me out"/>{' '}
                </FormGroup>

                <FormGroup mb={8}>
                    <CustomInput type="checkbox" invalid id="check3" label="Check me out"/>{' '}
                </FormGroup>

                <FormGroup check mb={8}>
                    <Input valid type="checkbox" value="" id="checkbox2" checked/>
                    <Label for="checkbox2" check>Agree to terms and conditions</Label>
                    <FormFeedback valid>Hello! This is validation feedback with valid prop.</FormFeedback>
                </FormGroup>

                <FormGroup check mb={8}>
                    <Input invalid type="checkbox" id="checkbox3"/>
                    <Label for="checkbox3" check>Do not agree to terms and conditions</Label>
                    <FormFeedback invalid>No! This is validation feedback with invalid prop.</FormFeedback>
                </FormGroup>





            </Form>
        </div>
    );
};


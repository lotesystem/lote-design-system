import React from 'react';
import { text, number } from '@storybook/addon-knobs';
import { Container, Row, Column } from '../components';


export default {
    title: 'Column',
    parameters: {
        component: Column,
    }
};


export const simple = () => {
    const gridGutterWidth = number('gridGutterWidth ', 64,{ range: true, min: 4, max: 512});
    const val = text('gridColumns', '12');
    const num = parseInt(val);
    return (
        <Container fluid style={{maxWidth: '1440px'}}>
            <Row gridGutterWidth={gridGutterWidth}>
                <Column style={{backgroundColor: '#e6faff'}} gridColumns={num} gridGutterWidth={gridGutterWidth} lg={2}>
                    <div style={{padding:'8px', color:'#fff', backgroundColor: '#01a1ff'}}>{'lg={2}'}</div>
                </Column>
                <Column style={{backgroundColor: '#e6faff'}} gridColumns={num} gridGutterWidth={gridGutterWidth} lg={2}>
                    <div style={{padding:'8px', color:'#fff', backgroundColor: '#01a1ff'}}>{'lg={2}'}</div>
                </Column>
                <Column style={{backgroundColor: '#e6faff'}} gridColumns={num} gridGutterWidth={gridGutterWidth} lg={8}>
                    <div style={{padding:'8px', color:'#fff', backgroundColor: '#01a1ff'}}>{'lg={8}'}</div>
                </Column>
            </Row>
        </Container>
    );
};

export const withoutBreakpoints = () => {
    const gridGutterWidth = number('gridGutterWidth ', 64,{ range: true, min: 4, max: 512});
    const val = text('gridColumns', '12');
    const num = parseInt(val);
    return (
        <Container fluid style={{maxWidth: '1440px'}}>
            <Row gridGutterWidth={gridGutterWidth}>
                <Column style={{backgroundColor: '#e6faff'}} gridColumns={num} gridGutterWidth={gridGutterWidth}>
                    <div style={{padding:'8px', color:'#fff', backgroundColor: '#01a1ff'}}>{'without breakpoint'}</div>
                </Column>
                <Column style={{backgroundColor: '#e6faff'}} gridColumns={num} gridGutterWidth={gridGutterWidth}>
                    <div style={{padding:'8px', color:'#fff', backgroundColor: '#01a1ff'}}>{'without breakpoint'}</div>
                </Column>
                <Column style={{backgroundColor: '#e6faff'}} gridColumns={num} gridGutterWidth={gridGutterWidth}>
                    <div style={{padding:'8px', color:'#fff', backgroundColor: '#01a1ff'}}>{'without breakpoint'}</div>
                </Column>
            </Row>
        </Container>
    );
};

export const withMultipleBreakpoints = () => {
    const gridGutterWidth = number('gridGutterWidth ', 64,{ range: true, min: 4, max: 512});
    const val = text('gridColumns', '12');
    const num = parseInt(val);
    return (
        <Container fluid style={{maxWidth: '1440px'}}>
            <Row style={{backgroundColor: '#0082d9'}} gridGutterWidth={gridGutterWidth}>
                <Column style={{backgroundColor: '#e6faff'}} xs={12} sm={8} md={6} lg={4} xl={1} gridColumns={num} gridGutterWidth={gridGutterWidth}>
                    <div style={{padding:'8px', color:'#fff', backgroundColor: '#01a1ff'}}>
                        {'xs={12} sm={8} md={6} lg={4} xl={1}'}
                    </div>
                </Column>
            </Row>
        </Container>
    );
};



export const inner = () => {
    const gridGutterWidth = number('gridGutterWidth ', 64,{ range: true, min: 4, max: 512});
    const val = text('gridColumns', '12');
    const num = parseInt(val);
    return (
        <Container fluid style={{maxWidth: '1440px'}}>
            <Row style={{backgroundColor: '#ddd',margin: 0}} gridGutterWidth={gridGutterWidth}>

                <Column style={{backgroundColor: '#eee'}} lg={6} gridColumns={num} gridGutterWidth={gridGutterWidth}>

                    <Row style={{backgroundColor: '#0082d9',margin: 0}} gridGutterWidth={gridGutterWidth}>

                        <Column style={{backgroundColor: '#e6faff'}} lg={6} gridColumns={num} gridGutterWidth={gridGutterWidth}>
                            <div style={{padding:'8px', color:'#fff', backgroundColor: '#01a1ff'}}>
                                {'lg={6}'}
                            </div>
                        </Column>

                        <Column style={{backgroundColor: '#e6faff'}} lg={6} gridColumns={num} gridGutterWidth={gridGutterWidth}>
                            <div style={{padding:'8px', color:'#fff', backgroundColor: '#01a1ff'}}>
                                {'lg={6}'}
                            </div>
                        </Column>
                    </Row>
                </Column>
            </Row>
        </Container>
    );
};

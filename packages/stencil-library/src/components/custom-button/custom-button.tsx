import { Component, Prop, h } from '@stencil/core';

@Component({
    tag: 'custom-button',
    styleUrl: 'custom-button.css',
    shadow: true,
})
export class CustomButton {
    @Prop() text: string;

    render() {
        return <button class='button'>{this.text}</button>;
    }
}
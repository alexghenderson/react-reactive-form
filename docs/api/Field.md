# Field

A higher order component which subscribes a react component to a particular control's state changes i.e the component 
will re-render only when it's or it's parent's state changes.

## Props
```ts
control: AbstractControl;
```
It's a required prop to tell the `Field` that which control has to be used for subscription.
You can subscribe a FormArray, FormControl and FormGroup.

##
```ts
render: (control: AbstractControl) => React.ReactElement<any>;
```
A callback which returns a react component which needs to be re-render whenever the control state changes.

##
```ts
onStateChange: (fn:Function) => void;
```
A callback which fires when the control state changes.

##
```ts
onValueChange: (fn:Function) => void;
```
A callback which fires when the control values changes.

##
```ts
onStatusChange: (fn:Function) => void;
```
A callback which fires when the control status changes.
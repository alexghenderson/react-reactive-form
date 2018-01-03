import React from 'react';

export default class Field extends React.Component {
    get isMounted() {
        return this._isMounted;
    }
    set isMounted(mounted) {
        this._isMounted = mounted;
    }
    constructor() {
        super();
        this.handleStateChange = this.handleStateChange.bind(this);
        this.handleValueChange = this.handleValueChange.bind(this);
        this.handleStatusChange = this.handleStatusChange.bind(this);
        this.isMounted = false;
    }
    componentDidMount() {
        const { control } = this.props;
        // Add listener
        if (control) {
            this.addListener(control);
        }

        this._isMounted = true;
    }
    addListener(control) {
        if(control) {
            control.stateChanges.subscribe(this.handleStateChange);
            control.valueChanges.subscribe(this.handleValueChange);
            control.statusChanges.subscribe(this.handleStatusChange);
        }
    }
    removeListener(control) {
        if(control) {
            control.stateChanges.unsubscribe(this.handleStateChange);
            control.valueChanges.unsubscribe(this.handleValueChange);
            control.statusChanges.unsubscribe(this.handleStatusChange);
        }
    }
    handleStateChange(state) {
        if(this.isMounted) {
            this.forceUpdate();
        }
    }
    handleValueChange(values) {
        const { onValueChange } = this.props;
        if(onValueChange) {
            onValueChange(values);
        }
    }
    handleStatusChange(status) {
        const { onStatusChange } = this.props;
        if(onStatusChange) {
            onStatusChange(status);
        }
    }
    componentWillUnmount() {
        // Remove Listener
        this.removeListener();
        this.isMounted = _false;
    }
    shouldComponentUpdate() {
        return false;
    }
    getComponent() {
        const { render, control } = this.props;
        if (control) {
            return render(control) || null;
        }
        return null;
    }
    render() {
        return this.getComponent();
    }
}
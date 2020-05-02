import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Picker } from '@react-native-community/picker';
import PropTypes from 'prop-types';

export default class EvaluationForm extends React.Component {
    static propTypes = {
        title: PropTypes.string,
        onChange: PropTypes.func
    }

    state = {
        selectedValue: "0",
    };

    render() {
        return (
            <View style={styles.Container}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ flex: .7 }}>
                        <Text>{this.props.title}</Text>
                    </View>
                    <View style={{ flex: .3 }}>
                        <Picker
                            selectedValue={this.state.selectedValue}
                            style={{ width: 80 }}
                            onValueChange={(itemValue, itemIndex) => this.setState({ selectedValue: itemValue })
                            }>
                            <Picker.Item label="0" value="0" />
                            <Picker.Item label="1" value="1" />
                            <Picker.Item label="2" value="2" />
                            <Picker.Item label="3" value="3" />
                            <Picker.Item label="4" value="4" />
                            <Picker.Item label="5" value="5" />
                        </Picker>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    Container: {
        paddingLeft: 30,
    }
});
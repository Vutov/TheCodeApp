import * as React from 'react';
import moment from "moment";
import { Text, ScrollView, StyleSheet } from 'react-native';
import EvaluationForm from '../componenets/evaluation-form';

export default class HomeScreen extends React.Component {
  state = {
    language: 'java',
  };

  render() {
    return (
      <ScrollView>
        <Text style={styles.Date} >{moment(new Date()).format("DD MMM YY")}</Text>
        <Text style={styles.Title}>Health</Text>
        <EvaluationForm title='Physical Fitness'></EvaluationForm>
        <EvaluationForm title='Sleep/Rest'></EvaluationForm>
        <EvaluationForm title='Diet/Nutrition'></EvaluationForm>
        <Text style={styles.Title}>Personal Development</Text>
        <EvaluationForm title='Intellectual Fitness'></EvaluationForm>
        <EvaluationForm title='Time Management'></EvaluationForm>
        <EvaluationForm title='Financial Management'></EvaluationForm>
        <EvaluationForm title='Personal Goals'></EvaluationForm>
        <Text style={styles.Title}>Professional Development</Text>
        <EvaluationForm title='Performance'></EvaluationForm>
        <EvaluationForm title='Advancement/Qualifications'></EvaluationForm>
        <Text style={styles.Title}>Character/Leadership</Text>
        <EvaluationForm title='Humility'></EvaluationForm>
        <EvaluationForm title='Emotional Control'></EvaluationForm>
        <EvaluationForm title='Mentoring/Charity'></EvaluationForm>
        <Text style={styles.Title}>Relationship</Text>
        <EvaluationForm title='Quality Time with Family'></EvaluationForm>
        <EvaluationForm title='Quality time friends/co-workers'></EvaluationForm>
        <Text style={styles.Title}>Preparedness/Safety</Text>
        <EvaluationForm title='Martial Arts/Self-Defense'></EvaluationForm>
        <EvaluationForm title='Weapons Training'></EvaluationForm>
        <EvaluationForm title='Home Safety/Emergency/Disaster'></EvaluationForm>
        <EvaluationForm title='Neighborhood/Community Impact'></EvaluationForm>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  Date: {
    textAlign: "center",
    fontSize: 15,
  },
  Title : {
    textTransform: "uppercase",
    paddingLeft: 5,
    paddingTop: 10,
  }
});
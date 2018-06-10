import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,
  FlatList
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { getQuestions } from "../utils/api.js";

//import CustomButton from "./CustomButton.js";
import { Button,WhiteSpace,WingBlank,Progress } from 'antd-mobile-rn';

export default class DeckList extends Component<Props> {
  constructor() {
    super();
    this.state = {
      questionNumber: 0,
      questions: [],
      correct: 0,
      incorrect: 0,
      skipped: 0,
      percent:0
    };
  }

  componentWillMount() {
    console.log("Question" + getQuestions());
    this.setState({ questions: getQuestions() });
  }
  resetQuiz() {
    this.setState({ questionNumber: 0, correct: 0, incorrect: 0, skipped: 0,percent:0 });
  }
  submitAnswer(answer) {
    let { questionNumber, correct,incorrect,skipped,percent } = this.state;

    const {questions} = this.state;
    if (answer == 5) {
      skipped = skipped + 1;
    } else {
      if (questions[questionNumber].answer == answer) {
        console.log("Correct");
        correct = correct + 1;
      } else {
        console.log("InCorrect");
        incorrect = incorrect + 1;
      }
    }

    questionNumber = questionNumber + 1;
    percent=percent+(100/questions.length);
    // console.log('correct'+correct);
    // console.log('incorrect'+incorrect);
    // console.log('questionNumber'+questionNumber);
    this.setState({
      questionNumber: questionNumber,
      correct: correct,
      skipped: skipped,
      incorrect: incorrect,
      percent
    });
  }

  goBack = () => {
    this.props.navigation.dispatch(NavigationActions.back({ key: null }));
  };

  render() {
    const questionNumber = this.state.questionNumber;
    const percent = this.state.percent;
    const questions = this.state.questions;

    if (questionNumber == questions.length) {
      return (
        <View>
          <Text> Game Over </Text>
          <Text> Correct : {this.state.correct} </Text>
          <Text> InCorrect : {this.state.incorrect} </Text>
          <Text> Skipped : {this.state.skipped} </Text>
          <Button type="primary"  onClick={() => this.resetQuiz()}>Reset Quiz</Button>
        </View>
      );
    }
    return (
      <ScrollView style={styles.container}>
      <WingBlank>
        <Text style={{fontSize:30,textAlign:'center'}}> {questions[questionNumber].question} </Text>
          <WhiteSpace />

          <Progress percent={percent} position="normal" />

          <WhiteSpace />
          <Button onClick={() => this.submitAnswer(1)}><Text style={{textAlign:'left'}}>{questions[questionNumber].option[0]}</Text></Button><WhiteSpace />

          <Button onClick={() => this.submitAnswer(2)}><Text style={{textAlign:'left'}}>{questions[questionNumber].option[1]}</Text></Button><WhiteSpace />

          <Button onClick={() => this.submitAnswer(3)}><Text style={{textAlign:'left'}}>{questions[questionNumber].option[2]}</Text></Button><WhiteSpace />

          <Button onClick={() => this.submitAnswer(4)}><Text style={{textAlign:'left'}}>{questions[questionNumber].option[3]}</Text></Button><WhiteSpace />

          <Button onClick={() => this.submitAnswer(5)}>Skip</Button><WhiteSpace />
      </WingBlank>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

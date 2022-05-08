import { ArrowLeft } from 'phosphor-react-native';
import React, { useState } from 'react';
import {
  View,
  TextInput,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import { captureScreen } from 'react-native-view-shot';
import { api } from '../../libs/api';
import { theme } from '../../theme';
import { feedbackTypes } from '../../utils/feedbackTypes';
import { Button } from '../Button';
import { ScreenshotButton } from '../ScreenshotButton';
import { FeedbackType } from '../Widget';
import * as FileSystem from 'expo-file-system';

import { styles } from './styles';

interface FormProps {
  feedbackType: FeedbackType;
  onFeedbackCanceled: () => void;
  onFeedbackSent: () => void;
}

export function Form({ feedbackType, onFeedbackCanceled, onFeedbackSent }: FormProps) {

  const feedbackTypeInfo = feedbackTypes[feedbackType];
  const [screenshot, setScreenshot] = useState('');
  const [isSendingFeedback, setIsSendingFeedback] = useState(false);
  const [comment, setComment] = useState('');

  function handleScreenshot() {
    captureScreen({
      format: 'jpg',
      quality: 0.8,
    })
      .then(uri => {
        setScreenshot(uri);
      })
      .catch(err => {
        console.error(err);
      });
  }

  function removeScreenshot() {
    setScreenshot('');
  }

  async function handleSubmit() {
    if (isSendingFeedback)
      return;

    setIsSendingFeedback(true);

    const screenshotBase64 = screenshot && await FileSystem.readAsStringAsync(screenshot, { encoding: FileSystem.EncodingType.Base64 });

    try {

      await api.post('/feedbacks', {
        type: feedbackType,
        screenshot: screenshotBase64 ? `data:image/jpg;base64,${screenshotBase64}` : null,
        comment: comment,
      });

      onFeedbackSent();
    } catch (e) {
      console.error(e);
    }

    setIsSendingFeedback(false);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onFeedbackCanceled}>
          <ArrowLeft
            size={24}
            weight="bold"
            color={theme.colors.text_secondary}
          />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Image source={feedbackTypeInfo.image} style={styles.image}/>
          <Text style={styles.titleText}>
            {feedbackTypeInfo.title}
          </Text>
        </View>
      </View>

      <TextInput
        multiline
        style={styles.input}
        placeholder="Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo..."
        placeholderTextColor={theme.colors.text_secondary}
        onChangeText={setComment}
      />

      <View style={styles.footer}>
        <ScreenshotButton
          onTakeScreenshot={handleScreenshot}
          onRemoveScreenshot={removeScreenshot}
          screenshot={screenshot}
        />

        <Button
          isLoading={isSendingFeedback}
          onPress={handleSubmit}
        />
      </View>

    </View>
  );
}

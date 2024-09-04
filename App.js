import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, Switch, ScrollView, FlatList,Button,Alert, SectionList } from 'react-native';

const resumeData = {
  personalInfo: {
    name: 'Joelyber Paredes',
    email: 'j.paredes.psa@gmail.com',
    phone: '09388819130',
  },
  professionalSummary: `Lorem ipsum odor amet, consectetuer adipiscing elit. Consequat dapibus tortor urna sagittis finibus class ante elit. Finibus vehicula pulvinar inceptos duis taciti accumsan duis habitasse..`,
  technicalSkills: [
    { category: 'Languages', skills: ['JavaScript (ES6+)', 'TypeScript'] },
    { category: 'Frameworks', skills: ['React Native', 'Code Igniter 3'] },
    { category: 'Other', skills: ['CSS3', 'Arduino', 'Assembly', 'VHDL'] },
  ],
  experience: [
    {
      title: 'Internship',
      company: 'DepED Region 6',
      duration: '2023 – 2024',
      details: [
        'On The Job Training and RSPC 2023 and 2024.',
      ],
    },
  ],
  education: {
    degree: 'Bachelor of Science in Computer Engineering',
    institution: 'Western Institute of Technology',
    duration: '2020 – 2024',
    coursework: [
      'Mobile App Development',
      'Data Structures',
      'Algorithms',
      'Web Technologies',
      'Robotics',
    ],
  },
};

export default function App() {
  const [switchValue, setSwitchValue] = React.useState(false);
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
          <Image
            source={require('./assets/images/react-logo.png')}
            style={styles.image}
          />
          <Text style={styles.title}>Resume</Text>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Personal Information</Text>
            <Text style={styles.infoText}>Name: {resumeData.personalInfo.name}</Text>
            <Text style={styles.infoText}>Email: {resumeData.personalInfo.email}</Text>
            <Text style={styles.infoText}>Phone: {resumeData.personalInfo.phone}</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Professional Summary</Text>
            <Text style={styles.summaryText}>{resumeData.professionalSummary}</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Technical Skills</Text>
            <FlatList
              data={resumeData.technicalSkills}
              keyExtractor={(item) => item.category}
              renderItem={({ item }) => (
                <View style={styles.skillCategory}>
                  <Text style={styles.categoryTitle}>{item.category}</Text>
                  {item.skills.map((skill, index) => (
                    <Text key={index} style={styles.skillText}>- {skill}</Text>
                  ))}
                </View>
              )}
            />
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Experience</Text>
            <SectionList
              sections={resumeData.experience.map(exp => ({
                title: exp.title,
                data: [exp],
              }))}
              renderSectionHeader={({ section: { title } }) => (
                <Text style={styles.sectionHeader}>{title}</Text>
              )}
              renderItem={({ item }) => (
                <View style={styles.experienceContainer}>
                  <Text style={styles.experienceCompany}>{item.company}</Text>
                  <Text style={styles.experienceDuration}>{item.duration}</Text>
                  {item.details.map((detail, index) => (
                    <Text key={index} style={styles.experienceDetail}>- {detail}</Text>
                  ))}
                </View>
              )}
              keyExtractor={(item) => item.company}
            />
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Education</Text>
            <Text style={styles.educationText}>{resumeData.education.degree} - {resumeData.education.institution}</Text>
            <Text style={styles.educationText}>Duration: {resumeData.education.duration}</Text>
            <Text style={styles.sectionTitle}>Coursework</Text>
            <FlatList
              data={resumeData.education.coursework}
              renderItem={({ item }) => <Text style={styles.courseworkText}>- {item}</Text>}
              keyExtractor={(item, index) => index.toString()}
            />
                      <Button
                        title='Press Here for Money'
                        color='black'
                        onPress={() => Alert.alert('Joke lang','Hingi po Pera')}
                      />
                    <TouchableOpacity
                      onPress={() => Alert.alert('Not Finished','No time Huhu')}
                      style={styles.button}>
                      <Text style={styles.buttonText}>View for more Details</Text>
                    </TouchableOpacity>
<Switch
  value={switchValue}
  onValueChange={(newSwitchValue) => {
    setSwitchValue(newSwitchValue);
    Alert.alert(
      'Dark Mode?',
      `Switch is now ${newSwitchValue ? 'Dark mode On haha' : 'my Bad, Not finished yet'}`,
      [{ text: 'OK' }]
    );
  }}
  thumbColor={switchValue ? 'yellow' : 'gray'} // Optional: Change thumb color based on the switch state
  trackColor={{ true: 'red', false: 'black' }}
/>

          </View>

        </View>
      </ScrollView>
      <StatusBar style="auto" translucent={true} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollViewContent: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
  },
  container: {
    width: '100%',
    maxWidth: 800,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#333',
  },
  infoText: {
    fontSize: 18,
    marginVertical: 5,
    color: '#555',
  },
  summaryText: {
    fontSize: 18,
    marginVertical: 10,
    textAlign: 'center',
    color: '#555',
  },
  skillCategory: {
    marginBottom: 20,
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  skillText: {
    fontSize: 18,
    color: '#555',
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#333',
  },
  experienceContainer: {
    marginBottom: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  experienceCompany: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  experienceDuration: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#777',
  },
  experienceDetail: {
    fontSize: 16,
    color: '#555',
  },
  educationText: {
    fontSize: 18,
    color: '#555',
  },
  courseworkText: {
    fontSize: 18,
    color: '#555',
  },
    button: {
      paddingHorizontal: 24,
      paddingVertical: 12,
      borderRadius: 16,
      backgroundColor: 'blue',
      marginBottom: 20,
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
      textAlign: 'center',
    },
});

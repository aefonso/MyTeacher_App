import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Welcome from '../pages/Welcome'
import CourseList from '../pages/CourseList'
import TeacherList from '../pages/TeacherList'
import AboutTeacher from '../pages/AboutTeacher'

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
     <Stack.Navigator>
         <Stack.Screen
            name = "Welcome"
            component={Welcome}
            options={{ headerShown: false }}
         />
         <Stack.Screen
         name="CourseList"
         component={CourseList}
         options={{headerShown: false}}
         />
          <Stack.Screen
         name="TeacherList"
         component={TeacherList}
         options={{headerShown: false}}
         />
          <Stack.Screen
         name="AboutTeacher"
         component={AboutTeacher}
         options={{headerShown: false}}
         />
     </Stack.Navigator>   
    )
}
@@ .. @@
 import { Tabs } from 'expo-router';
 import { Chrome as Home, TrendingUp, Search, User } from 'lucide-react-native';
+import { Colors } from '../../constants/Colors';

 export default function TabLayout() {
   return (
     <Tabs
       screenOptions={{
         headerShown: false,
         tabBarStyle: {
-          backgroundColor: '#000000',
-          borderTopColor: 'rgba(155, 97, 229, 0.3)',
+          backgroundColor: Colors.background,
+          borderTopColor: Colors.border,
           borderTopWidth: 0.5,
           height: 60,
           paddingBottom: 8,
           paddingTop: 8,
-          shadowColor: '#9B61E5',
+          shadowColor: Colors.primary,
           shadowOffset: { width: 0, height: -1 },
           shadowOpacity: 0.2,
           shadowRadius: 8,
           elevation: 8,
         },
-        tabBarActiveTintColor: '#9B61E5',
-        tabBarInactiveTintColor: '#666666',
+        tabBarActiveTintColor: Colors.primary,
+        tabBarInactiveTintColor: Colors.textMuted,
         tabBarShowLabel: false,
         tabBarIconStyle: {
           marginTop: 4,
         },
       }}>
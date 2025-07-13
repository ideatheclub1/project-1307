@@ .. @@
 import React, { useState } from 'react';
 import {
   View,
   StyleSheet,
   Alert,
   FlatList,
 } from 'react-native';
 import { useRouter } from 'expo-router';
 import Header from '../components/Header';
 import StoryCarousel from '../components/StoryCarousel';
 import PostCard from '../components/PostCard';
 import { mockPosts, mockStories, mockUsers } from '../data/mockData';
 import { Post, Story } from '../types';
+import { Colors } from '../constants/Colors';

@@ .. @@

 const styles = StyleSheet.create({
   container: {
     flex: 1,
-    backgroundColor: '#000000',
+    backgroundColor: Colors.background,
   },
   flatList: {
     flex: 1,
   },
   contentContainer: {
     paddingBottom: 20,
   },
 });
@@ .. @@
 import React, { useState } from 'react';
 import {
   View,
   Text,
   Image,
   TouchableOpacity,
   StyleSheet,
   Dimensions,
   Alert,
 } from 'react-native';
 import { useRouter } from 'expo-router';
 import Animated, {
   useSharedValue,
   useAnimatedStyle,
   withSpring,
   withRepeat,
   withTiming,
   interpolate,
 } from 'react-native-reanimated';
 import { Heart, MessageCircle, Share2, MoveHorizontal as MoreHorizontal, TrendingUp } from 'lucide-react-native';
 import { Post } from '../types';
+import { Colors } from '../constants/Colors';

@@ .. @@
           {post.isTrending && (
             <Animated.View style={[styles.trendingBadge, trendingAnimatedStyle]}>
-              <TrendingUp size={12} color="#ff6b9d" />
+              <TrendingUp size={12} color={Colors.trending} />
               <Text style={styles.trendingText}>Trending</Text>
             </Animated.View>
           )}
           <TouchableOpacity style={styles.moreButton}>
-            <MoreHorizontal size={18} color="#ffffff" />
+            <MoreHorizontal size={18} color={Colors.text} />
           </TouchableOpacity>
@@ .. @@
             <Animated.View style={likeAnimatedStyle}>
               <Heart
                 size={22}
-                color={isLiked ? '#ff6b9d' : '#ffffff'}
-                fill={isLiked ? '#ff6b9d' : 'transparent'}
+                color={isLiked ? Colors.trending : Colors.text}
+                fill={isLiked ? Colors.trending : 'transparent'}
               />
             </Animated.View>
           </TouchableOpacity>

           <TouchableOpacity
             style={styles.actionButton}
             onPress={() => onComment(post.id)}
           >
-            <MessageCircle size={22} color="#ffffff" />
+            <MessageCircle size={22} color={Colors.text} />
           </TouchableOpacity>

           <TouchableOpacity style={styles.actionButton}>
-            <Share2 size={22} color="#ffffff" />
+            <Share2 size={22} color={Colors.text} />
           </TouchableOpacity>
@@ .. @@

 const styles = StyleSheet.create({
   container: {
-    backgroundColor: '#000000',
+    backgroundColor: Colors.background,
     marginBottom: 16,
   },
   header: {
     flexDirection: 'row',
     alignItems: 'center',
     justifyContent: 'space-between',
     paddingHorizontal: 12,
     paddingVertical: 8,
   },
   userInfo: {
     flexDirection: 'row',
     alignItems: 'center',
     flex: 1,
   },
   avatar: {
     width: 32,
     height: 32,
     borderRadius: 16,
     marginRight: 10,
     borderWidth: 1,
-    borderColor: '#9B61E5',
+    borderColor: Colors.primary,
   },
   userDetails: {
     flex: 1,
   },
   username: {
     fontSize: 14,
     fontWeight: '600',
-    color: '#FFFFFF',
+    color: Colors.text,
   },
   timestamp: {
     fontSize: 11,
-    color: '#A0A0A0',
+    color: Colors.textMuted,
     marginTop: 1,
   },
   headerRight: {
     flexDirection: 'row',
     alignItems: 'center',
   },
   trendingBadge: {
     flexDirection: 'row',
     alignItems: 'center',
-    backgroundColor: 'rgba(18, 18, 18, 0.8)',
+    backgroundColor: Colors.backgroundSecondary,
     paddingHorizontal: 6,
     paddingVertical: 3,
     borderRadius: 10,
     marginRight: 6,
-    shadowColor: '#9B61E5',
+    shadowColor: Colors.primary,
     shadowOffset: { width: 0, height: 0 },
     shadowOpacity: 0.5,
     shadowRadius: 8,
     elevation: 4,
     borderWidth: 1,
-    borderColor: 'rgba(155, 97, 229, 0.3)',
+    borderColor: Colors.border,
   },
   trendingText: {
     fontSize: 9,
-    color: '#9B61E5',
+    color: Colors.primary,
     fontWeight: '600',
     marginLeft: 3,
   },
   moreButton: {
     padding: 4,
   },
   postImage: {
     width: width,
     height: width,
     resizeMode: 'cover',
   },
   actions: {
     flexDirection: 'row',
     alignItems: 'center',
     justifyContent: 'space-between',
     paddingHorizontal: 12,
     paddingVertical: 8,
   },
   leftActions: {
     flexDirection: 'row',
     alignItems: 'center',
   },
   actionButton: {
     marginRight: 14,
     padding: 2,
   },
   likesContainer: {
     paddingHorizontal: 12,
     marginBottom: 4,
   },
   likesText: {
     fontSize: 13,
-    color: '#FFFFFF',
+    color: Colors.text,
     fontWeight: '600',
   },
   likedText: {
-    color: '#9B61E5',
+    color: Colors.primary,
   },
   contentContainer: {
     paddingHorizontal: 12,
     marginBottom: 4,
   },
   content: {
     fontSize: 13,
     lineHeight: 18,
   },
   contentUsername: {
     fontWeight: '600',
-    color: '#FFFFFF',
+    color: Colors.text,
   },
   contentText: {
-    color: '#FFFFFF',
+    color: Colors.text,
   },
   viewComments: {
     fontSize: 13,
-    color: '#A0A0A0',
+    color: Colors.textMuted,
     paddingHorizontal: 12,
     marginBottom: 8,
   },
 });
import { supabase } from '../utils/hooks/supabase'
import * as ImagePicker from 'expo-image-picker'

export async function uploadSpotlightPicture() {
  try {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: false,
      allowsEditing: true,
      quality: 1,
      exif: false,
    })

    if (result.canceled || !result.assets || result.assets.length === 0) {
      console.log('User cancelled image picker.')
      return
    }

    const image = result.assets[0]

    if (!image.uri) {
      throw new Error('No image URI found')
    }

    const arrayBuffer = await fetch(image.uri).then(res => res.arrayBuffer())

    const fileExt = image.uri.split('.').pop()?.toLowerCase() || 'jpg'
    const fileName = `${Date.now()}.${fileExt}`
    const filePath = `avatars/${fileName}`

    const { data, error } = await supabase.storage
      .from('avatars')
      .upload(filePath, arrayBuffer, {
        contentType: image.mimeType || 'image/jpeg',
      })

    if (error) {
      throw error
    }

    const { data: publicData } = supabase.storage.from('avatars').getPublicUrl(filePath)

    console.log('Upload complete:', {
      id: fileName,
      url: publicData.publicUrl,
    })

    return {
      id: fileName,
      url: publicData.publicUrl,
    }
  } catch (error) {
    console.error('Upload error:', error)
    throw error
  }
}
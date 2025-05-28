import { useState, useEffect } from "react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

import { useGetAllTags } from "@/hooks/use-get-all-tags"
import { useUpdateOrder } from "@/hooks/use-update-order"

import { TypographyMuted } from "@/utils/typography/typography"
import { Tag, Pencil, Save } from "lucide-react"

type TagsProps = {
  tags: string[]
  orderId: number
}

export function Tags({ tags, orderId }: TagsProps) {
  const { data: tagsAvaliables = [] } = useGetAllTags()
  const { mutate } = useUpdateOrder({ orderId })

  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [isEdit, setIsEdit] = useState(false)

  useEffect(() => {
    setSelectedTags(tags)
  }, [tags])

  const handleTagToggle = (tag: string, checked: boolean) => {
    setSelectedTags(prev =>
      checked ? [...prev, tag] : prev.filter(t => t !== tag)
    )
  }

  const handleEditTags = () => {
    mutate({ tags: selectedTags })
    setIsEdit(false)
  }

  return (
    <div className="mb-3">
      <div className="flex items-center justify-between mb-2">
        <TypographyMuted text="Tags" />
        {isEdit ? (
          <Button size="xs" onClick={handleEditTags}>
            <Save className="w-4 h-4 mr-1" />
          </Button>
        ) : (
          <Button size="xs" variant="outline" onClick={() => setIsEdit(true)}>
            <Pencil className="w-4 h-4 mr-1" />
          </Button>
        )}
      </div>

      {isEdit ? (
        <div className="flex flex-wrap gap-2">
          {tagsAvaliables.map(tag => {
            const isChecked = selectedTags.includes(tag.name)
            return (
              <label
                key={tag.name}
                className="flex items-center gap-2 cursor-pointer"
              >
                <Checkbox
                  checked={isChecked}
                  onCheckedChange={checked =>
                    handleTagToggle(tag.name, Boolean(checked))
                  }
                />
                <span className="text-sm">{tag.name}</span>
              </label>
            )
          })}
        </div>

      ) : (

        tags.length ?
          <div className="flex gap-2 flex-wrap">
            {tags.map(tag => (
              <Badge key={tag} variant="outline">
                <Tag size={14} className="mr-1" />
                {tag}
              </Badge>
            ))}
          </div>
          :
          <span>---</span>
      )}
    </div>
  )
}

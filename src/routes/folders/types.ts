export type FileData = {
	name: string
	extension: string
}

export type FolderData = {
	name: string
	files: FileData[]
	subfolders: FolderData[]
}

import { Plugin, Notice, TFile } from 'obsidian';

export default class Archiver extends Plugin {
    async onload(): Promise<void> {
        this.addCommand({
            id: 'archive-notes',
            name: 'Archive Notes',
            callback: async () => {
                // Get the active file
                const activeFile: TFile | null = this.app.workspace.getActiveFile();
                if (!activeFile) {
                    new Notice('No active file');
                    return;
                }

                // TODO remove this check? make optional?
                // Extract date from filename (assuming format: YYYY-MM-DD-*.md)
                const dateMatch = activeFile.name.match(/^(\d{4})-(\d{2})-(\d{2})/);
                if (!dateMatch) {
                    new Notice('File name does not contain a valid date format (YYYY-MM-DD)');
                    return;
                }

                const [_, year, month, day] = dateMatch;
                // TODO: make this customizable
                const archivePath: string = `TODO/Daily/Archive/${year}/${month}`;

                try {
                    await this.app.vault.adapter.mkdir(archivePath);

                    // Move the file
                    await this.app.fileManager.renameFile(
                        activeFile,
                        `${archivePath}/${activeFile.name}`
                    );

                    new Notice(`Successfully archived to ${archivePath}`);
                } catch (error) {
                    console.error('Archive error:', error);
                    new Notice(`Failed to archive: ${error instanceof Error ? error.message : String(error)}`);
                }
            },
        });
    }
} 
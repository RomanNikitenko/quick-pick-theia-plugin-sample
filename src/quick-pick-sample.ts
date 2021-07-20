
import * as theia from '@theia/plugin';

export function start(context: theia.PluginContext) {
    const testQuickPickCommand = {
        id: 'test-quick-pick-command',
        label: "Test Quick Pick"
    };
    context.subscriptions.push(theia.commands.registerCommand(testQuickPickCommand, (...args: any[]) => {
        const items: theia.QuickPickItem[] = [];
        items.push({ label: 'first item' });
        items.push({ type: 'separator', label: 'separator' });

        items.push({ label: 'second item' });
        items.push({ type: 'separator', label: '' });

        items.push({ label: 'third item' });

        theia.window.showQuickPick(items, {});
    }));

}

export function stop() {

}

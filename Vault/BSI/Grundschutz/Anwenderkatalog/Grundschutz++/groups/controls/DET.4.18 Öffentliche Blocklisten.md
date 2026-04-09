---
tags: det418-prm1
class: BSI-Stand-der-Technik-Kernel
type: control
control: DET.4.18 Öffentliche Blocklisten
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# DET.4.18 - Öffentliche Blocklisten
Gruppe: [DET.4 Überwachung von Aktivitäten](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/DET.4%20Überwachung%20von%20Aktivitäten.md)
---

### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Detektion (DET)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/DET%20Detektion.md)**<br> ***  &rarr; [Überwachung von Aktivitäten](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/DET.4%20Überwachung%20von%20Aktivitäten.md) *** | E-Mail | KANN | öffentliche Blocklisten auf Einträge für eigene E-Mail-Server | {{regelmäßig}} | überprüfen | Detektions-Konzept | >Detektion für E-Mail KANN öffentliche Blocklisten auf Einträge für eigene E-Mail-Server {{ insert: param, det.4.18-prm1 }} überprüfen.

> [!info]- Guidance
>Die Überprüfung von E-Mail-Blocklisteneinträgen ist entscheidend, um sicherzustellen, dass Nachrichten zuverlässig zugestellt und nicht als Spam klassifiziert werden. Dazu kann zunächst mit Tools wie MXToolbox oder MultiRBL geprüft werden, ob und auf welchen Listen der Server geführt wird, um anschließend die genauen Ursachen zu ermitteln – häufig spielen kompromittierte Konten, unzureichende Authentifizierungsmethoden oder veraltete E-Mail-Listen eine Rolle. Nach der Identifikation können Admins die grundlegenden Probleme beheben, beispielsweise durch Implementierung von SPF-, DKIM- und DMARC-Protokollen, Bereinigung von E-Mail-Listen oder Beseitigung technischer Schwachstellen, bevor bei den jeweiligen Blocklistenbetreibern ein Antrag auf Entfernung gestellt werden kann, wobei in der Regel Nachweise für die durchgeführten Verbesserungen erforderlich sind; zur langfristigen Prävention kann eine regelmäßige Überwachung der Senderreputation, sowie die Einhaltung bewährter E-Mail-Praktiken beitragen, oder die Nutzung eines seriösen E-Mail-Dienstleisters in Betracht gezogen werden.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | e180774d-4880-4ef4-bc08-5c06e034dbc9 |> | ** Security Level** | [erhöht](security_level_erhöht) |> | ** Effort Level ** | [5](effort_level_5) |> | ** Alternate Identifier ** | e180774d-4880-4ef4-bc08-5c06e034dbc9 |

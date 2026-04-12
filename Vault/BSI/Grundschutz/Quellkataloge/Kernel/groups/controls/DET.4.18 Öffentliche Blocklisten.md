---
tags:
- det418-prm1
- oscal_control
class: BSI-Stand-der-Technik-Kernel
type: control
control: DET.4.18 Öffentliche Blocklisten
stmt_target_object_category: E-Mail
stmt_modal_verb: KANN
stmt_action_word: überprüfen
control_effort_level: '5'
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# DET.4.18 - Öffentliche Blocklisten
Gruppe: [DET.4 Überwachung von Aktivitäten](BSI/Grundschutz/Quellkataloge/Kernel/groups/DET.4%20Überwachung%20von%20Aktivitäten.md)
---

### Statement
|  Gruppe | Praktik | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - | - |
| <div style="background:#cccccc">*[Detektion (DET)](BSI/Grundschutz/Quellkataloge/Kernel/groups/DET%20Detektion.md)*<br> *  &rarr; [Überwachung von Aktivitäten](BSI/Grundschutz/Quellkataloge/Kernel/groups/DET.4%20Überwachung%20von%20Aktivitäten.md) *</div> | [Detektion](practices_Detektion_f479aa5a-6dd9-4b9b-973e-8c4f85b074ed) | [E-Mail](target_object_categories_E-Mail_7aa03e0c-a417-4b08-a6d5-b89bd63c6a83) | [KANN](modal_verbs_KANN_1c941e58-72a5-4633-8cca-8efad571932b) | öffentliche Blocklisten auf Einträge für eigene E-Mail-Server | {{regelmäßig}} | [überprüfen](action_words_überprüfen_907e4ee6-6eb8-4160-902d-5b037f417e6a) | Detektions-Konzept | &mapsto;<span style="display:inline-block;border:1px solid;margin-left:8pt;padding:8pt;vertical-align:top;max-width:90%;">Detektion für E-Mail KANN öffentliche Blocklisten auf Einträge für eigene E-Mail-Server {{ insert: param, det.4.18-prm1 }} überprüfen.</span>

> [!info]- Guidance
>Die Überprüfung von E-Mail-Blocklisteneinträgen ist entscheidend, um sicherzustellen, dass Nachrichten zuverlässig zugestellt und nicht als Spam klassifiziert werden. Dazu kann zunächst mit Tools wie MXToolbox oder MultiRBL geprüft werden, ob und auf welchen Listen der Server geführt wird, um anschließend die genauen Ursachen zu ermitteln – häufig spielen kompromittierte Konten, unzureichende Authentifizierungsmethoden oder veraltete E-Mail-Listen eine Rolle. Nach der Identifikation können Admins die grundlegenden Probleme beheben, beispielsweise durch Implementierung von SPF-, DKIM- und DMARC-Protokollen, Bereinigung von E-Mail-Listen oder Beseitigung technischer Schwachstellen, bevor bei den jeweiligen Blocklistenbetreibern ein Antrag auf Entfernung gestellt werden kann, wobei in der Regel Nachweise für die durchgeführten Verbesserungen erforderlich sind; zur langfristigen Prävention kann eine regelmäßige Überwachung der Senderreputation, sowie die Einhaltung bewährter E-Mail-Praktiken beitragen, oder die Nutzung eines seriösen E-Mail-Dienstleisters in Betracht gezogen werden.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | e180774d-4880-4ef4-bc08-5c06e034dbc9 |> | ** Security Level** | [erhöht](security_level_erhöht) |> | ** Effort Level ** | [5](effort_level_5) |> | ** Alternate Identifier ** | e180774d-4880-4ef4-bc08-5c06e034dbc9 |

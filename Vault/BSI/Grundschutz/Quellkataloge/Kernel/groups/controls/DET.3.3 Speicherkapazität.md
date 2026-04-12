---
tags:
- det33-prm1
- oscal_control
class: BSI-Stand-der-Technik-Kernel
type: control
control: DET.3.3 Speicherkapazität
stmt_modal_verb: SOLLTE
stmt_action_word: überprüfen
control_effort_level: '4'
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# DET.3.3 - Speicherkapazität
Gruppe: [DET.3 Protokollierung](BSI/Grundschutz/Quellkataloge/Kernel/groups/DET.3%20Protokollierung.md)
---

### Statement
|  Gruppe | Praktik | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - | - |
| <div style="background:#cccccc">*[Detektion (DET)](BSI/Grundschutz/Quellkataloge/Kernel/groups/DET%20Detektion.md)*<br> *  &rarr; [Protokollierung](BSI/Grundschutz/Quellkataloge/Kernel/groups/DET.3%20Protokollierung.md) *</div> | [Detektion](practices_Detektion_f479aa5a-6dd9-4b9b-973e-8c4f85b074ed) |  | [SOLLTE](modal_verbs_SOLLTE_a04a4855-3a63-4f06-b2f4-fc4d94aee2cf) | den für die Protokollierung zur Verfügung stehenden Speicherplatz | {{bei Erreichen eines bestimmten Schwellwertes oder regelmäßig}} | [überprüfen](action_words_überprüfen_907e4ee6-6eb8-4160-902d-5b037f417e6a) | Detektions-Konzept | &mapsto;<span style="display:inline-block;border:1px solid;margin-left:8pt;padding:8pt;vertical-align:top;max-width:90%;">Detektion SOLLTE den für die Protokollierung zur Verfügung stehenden Speicherplatz {{ insert: param, det.3.3-prm1 }} überprüfen.</span>

> [!info]- Guidance
>Diese Vorschrift zielt darauf ab, die Verfügbarkeit der Protokolldaten sicherzustellen. Das ist essenziell, da eine unterbrochene oder lückenhafte Aufzeichnung die Früherkennung von Angriffen unmöglich machen könnte, was dazu führen könnte, dass kritische forensische Beweise für eine Untersuchung fehlen. Die Umsetzung dieser Anforderung kann auf verschiedene Arten erfolgen. Es könnte ein Skript oder ein automatisierter Dienst eingesetzt werden, der den Füllstand des Speicherplatzes in regelmäßigen Abständen, zum Beispiel alle 15 Minuten oder einmal pro Stunde, prüft. Alternativ kann eine Überprüfung bei einem definierten Schwellenwert durchgeführt werden, etwa wenn 80 % oder 90 % des zugewiesenen Speicherplatzes belegt sind. Zur Behebung könnte bei Kapazitätsengpässen eine automatische Archivierung älterer Protokolldaten auf einem separaten, kostengünstigeren Speicher gestartet werden, um den primären Speicher zu entlasten. Es kann aber auch eine Rotationsstrategie für Log-Dateien konfiguriert werden, die bei Erreichen einer bestimmten Größe oder eines Alters die ältesten Dateien löscht oder archiviert.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 558dc6ab-ba8e-47bb-ba24-ddf09be49ec0 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [4](effort_level_4) |> | ** Alternate Identifier ** | 558dc6ab-ba8e-47bb-ba24-ddf09be49ec0 |

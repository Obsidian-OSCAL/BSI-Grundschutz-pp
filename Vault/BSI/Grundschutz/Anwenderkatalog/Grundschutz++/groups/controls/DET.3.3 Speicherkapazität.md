---
tags: det33-prm1
class: BSI-Stand-der-Technik-Kernel
type: control
control: DET.3.3 Speicherkapazität
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# DET.3.3 - Speicherkapazität
Gruppe: [DET.3 Protokollierung](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/DET.3%20Protokollierung.md)
---

### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Detektion (DET)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/DET%20Detektion.md)**<br> ***  &rarr; [Protokollierung](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/DET.3%20Protokollierung.md) *** |  | SOLLTE | den für die Protokollierung zur Verfügung stehenden Speicherplatz | {{bei Erreichen eines bestimmten Schwellwertes oder regelmäßig}} | überprüfen | Detektions-Konzept | >Detektion SOLLTE den für die Protokollierung zur Verfügung stehenden Speicherplatz {{ insert: param, det.3.3-prm1 }} überprüfen.

> [!info]- Guidance
>Diese Vorschrift zielt darauf ab, die Verfügbarkeit der Protokolldaten sicherzustellen. Das ist essenziell, da eine unterbrochene oder lückenhafte Aufzeichnung die Früherkennung von Angriffen unmöglich machen könnte, was dazu führen könnte, dass kritische forensische Beweise für eine Untersuchung fehlen. Die Umsetzung dieser Anforderung kann auf verschiedene Arten erfolgen. Es könnte ein Skript oder ein automatisierter Dienst eingesetzt werden, der den Füllstand des Speicherplatzes in regelmäßigen Abständen, zum Beispiel alle 15 Minuten oder einmal pro Stunde, prüft. Alternativ kann eine Überprüfung bei einem definierten Schwellenwert durchgeführt werden, etwa wenn 80 % oder 90 % des zugewiesenen Speicherplatzes belegt sind. Zur Behebung könnte bei Kapazitätsengpässen eine automatische Archivierung älterer Protokolldaten auf einem separaten, kostengünstigeren Speicher gestartet werden, um den primären Speicher zu entlasten. Es kann aber auch eine Rotationsstrategie für Log-Dateien konfiguriert werden, die bei Erreichen einer bestimmten Größe oder eines Alters die ältesten Dateien löscht oder archiviert.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 558dc6ab-ba8e-47bb-ba24-ddf09be49ec0 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [4](effort_level_4) |> | ** Alternate Identifier ** | 558dc6ab-ba8e-47bb-ba24-ddf09be49ec0 |

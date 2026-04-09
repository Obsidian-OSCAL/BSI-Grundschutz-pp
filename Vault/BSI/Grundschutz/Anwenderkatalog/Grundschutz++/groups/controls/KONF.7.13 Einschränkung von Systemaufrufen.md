---
tags: Produktbeschreibung
class: BSI-Stand-der-Technik-Kernel
type: control
control: KONF.7.13 Einschränkung von Systemaufrufen
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# KONF.7.13 - Einschränkung von Systemaufrufen
Tags: "[Produktbeschreibung](tags_Produktbeschreibung)"
Gruppe: [KONF.7 Schutz vor Schadcode](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF.7%20Schutz%20vor%20Schadcode.md)
---

### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Konfiguration (KONF)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF%20Konfiguration.md)**<br> ***  &rarr; [Schutz vor Schadcode](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF.7%20Schutz%20vor%20Schadcode.md) *** | IT-Systeme | KANN | Systemaufrufe | pro Anwendung | einschränken | Konfigurationshistorie | >Konfiguration für IT-Systeme KANN Systemaufrufe pro Anwendung einschränken.

> [!info]- Guidance
>Ein Systemaufruf (engl. system call) ist dabei die Methode, mit der eine Anwendung Zugriff auf die Ressourcen des Betriebssystems anfordert, z.B. um eine Datei zu öffnen, in das Netzwerk zu kommunizieren oder einen neuen Prozess zu starten. Diese feingranulare Einschränkung wird in der Branche auch als Capability-based Security oder Seccomp (Secure Computing Mode) bezeichnet. Der Zweck dieser Vorschrift ist die gezielte Reduzierung der Angriffsfläche, indem selbst eine vertrauenswürdige, aber kompromittierte Anwendung daran gehindert wird, schädliche Aktionen auszuführen. Ein Angreifer könnte beispielsweise die Prozess-ID (PID) einer Anwendung kapern und versuchen, über deren Kontext privilegierte Systemaufrufe durchzuführen, um sich im Netzwerk auszubreiten oder sensible Daten zu löschen. Die Einschränkung dieser Aufrufe kann die Folgen eines erfolgreichen Angriffs erheblich mildern und so die Ausbreitung von Malware oder die Manipulation von Systemprozessen verhindern.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 0d1bb274-a8e2-4fdb-a94e-25dd0565fab1 |> | ** Security Level** | [erhöht](security_level_erhöht) |> | ** Effort Level ** | [5](effort_level_5) |> | ** Alternate Identifier ** | 0d1bb274-a8e2-4fdb-a94e-25dd0565fab1 |

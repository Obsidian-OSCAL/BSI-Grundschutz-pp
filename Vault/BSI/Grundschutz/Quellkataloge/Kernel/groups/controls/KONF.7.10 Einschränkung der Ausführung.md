---
tags: Produktbeschreibung_Living_off_the_land
class: BSI-Stand-der-Technik-Kernel
type: control
control: KONF.7.10 Einschränkung der Ausführung
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# KONF.7.10 - Einschränkung der Ausführung
Tags: "[Produktbeschreibung](tags_Produktbeschreibung)" "[Living off the land](tags_Living off the land)"
Gruppe: [KONF.7 Schutz vor Schadcode](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.7%20Schutz%20vor%20Schadcode.md)
---

### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Konfiguration (KONF)](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF%20Konfiguration.md)**<br> ***  &rarr; [Schutz vor Schadcode](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.7%20Schutz%20vor%20Schadcode.md) *** | IT-Systeme | SOLLTE | die Ausführung nicht autorisierter Anwendungen |  | einschränken | Konfigurationshistorie | >Konfiguration für IT-Systeme SOLLTE die Ausführung nicht autorisierter Anwendungen einschränken.

> [!info]- Guidance
>Wenn Anwendungen an beliebigen Speicherorten installiert und ausgeführt werden, z.B. im Wurzeldateisystem des Betriebssystems oder an Speicherorten zusammen mit Daten der Nutzerumgebung, dann könnte dies zahlreiche Sicherheitsrisiken mit sich bringen. Unbefugte oder schadhafte Anwendungen könnten unbemerkt an unautorisierte Orte platziert werden, wo sie außerhalb etablierter Sicherheitskontrollen agieren und beispielsweise Privilege-Escalation-Angriffe durchführen können. Zudem wird das Risiko der Manipulation von Anwendungsdateien erhöht, da Angreifer gezielt nach nicht-geschützten Speicherorten suchen, um dort eigenen Code zu hinterlegen oder legitime Anwendungen zu modifizieren. Eine solche Situation kann zu "Living-off-the-Land"-Angriffen führen, bei denen Angreifer vorhandene legitime Programme missbrauchen, um Schadaktionen auszuführen, was die Erkennung erheblich erschwert. Die Beschränkung von Ausführungsspeicherorten (Execution Control) zielt darauf ab, die Angriffsfläche zu reduzieren und eine bessere Kontrolle über ausführbare Programme zu ermöglichen.  Zur technischen Umsetzung dieser Anforderung kann eine Institution verschiedene Maßnahmen implementieren. Application Allowlisting kann eingesetzt werden, um nur vertrauenswürdige Anwendungen aus definierten Verzeichnissen auszuführen, beispielsweise mittels AppLocker unter Windows oder SELinux unter Linux-Systemen. Zusätzlich können Software Restriction Policies (SRPs) konfiguriert werden, um Ausführungsrechte auf bestimmte Verzeichnispfade zu begrenzen, wobei eine Trennung zwischen Systemverzeichnissen und Nutzerverzeichnissen empfehlenswert ist. Weitere wirksame Techniken umfassen die Implementierung von Code Signing, wodurch nur digital signierte Anwendungen ausgeführt werden können, sowie die Nutzung von Container-Technologien wie Docker, die eine isolierte Ausführungsumgebung bieten. Dabei kann auf das Inventar der Anwendungen als Grundlage zurückgegriffen werden.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 02df7412-74de-45a2-abfd-aa8cf94ff93d |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [4](effort_level_4) |> | ** Alternate Identifier ** | 02df7412-74de-45a2-abfd-aa8cf94ff93d |
